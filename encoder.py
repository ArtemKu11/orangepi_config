import keyboard
import wiringpi
from datetime import datetime

class EncoderProcessor:
    FIRST_PIN = 3
    SECOND_PIN = 4
    first_pin_value = 1
    second_pin_value = 1
    last_emit_time = datetime.now()

    def set_pin_mode(self, mode: str): # 1-OUT (Когда хотим вводить), 0-IN (Когда хотим слушать)
        if mode.lower() == "out":
            wiringpi.pinMode(self.FIRST_PIN, 1)
            wiringpi.pinMode(self.SECOND_PIN, 1)
        elif mode.lower() == "in":
            wiringpi.pinMode(self.FIRST_PIN, 0)
            wiringpi.pinMode(self.SECOND_PIN, 0)

    def refresh_pin_values(self):
        self.first_pin_value = wiringpi.digitalRead(self.FIRST_PIN)
        self.second_pin_value = wiringpi.digitalRead(self.SECOND_PIN)

    def get_pin_values(self):
        return wiringpi.digitalRead(self.FIRST_PIN), wiringpi.digitalRead(self.SECOND_PIN)

    def print_using_timeout(self, msg: str):
        diff = datetime.now() - self.last_emit_time
        diff = self.to_seconds(diff)
        if diff > 0.01:
            if msg.lower() == "против":
                keyboard.press_and_release('b')
            else:
                keyboard.press_and_release('f')
            self.last_emit_time = datetime.now()

    def to_seconds(self, diff):
        return diff.seconds + diff.microseconds / 1000000

    # ПО ЧАСОВОЙ:
    # 1 1
    # 1 0
    # 0 0
    # 0 1
    # 1 1

    # ПРОТИВ ЧАСОВОЙ:
    # 1 1
    # 0 1
    # 0 0
    # 1 0
    # 1 1

    def start_processing(self):
        self.set_pin_mode('in')
        self.refresh_pin_values()


        while True:
            first_value, second_value = self.get_pin_values()
            if first_value != self.first_pin_value:
               if second_value == self.second_pin_value:
                   if self.first_pin_value == 1:
                       if self.second_pin_value == 1:
                           self.print_using_timeout("ПРОТИВ")
                       else:
                           self.print_using_timeout("ПО")
                   elif self.first_pin_value == 0:
                       if self.second_pin_value == 1:
                           self.print_using_timeout("ПО")
                       else:
                           self.print_using_timeout("ПРОТИВ")

            elif second_value != self.second_pin_value:
                if self.second_pin_value == 1:
                    if self.first_pin_value == 1:
                        self.print_using_timeout("ПО")
                    else:
                        self.print_using_timeout("ПРОТИВ")
                elif self.second_pin_value == 0:
                    if self.first_pin_value == 1:
                        self.print_using_timeout("ПРОТИВ")
                    else:
                        self.print_using_timeout("ПО")


            self.first_pin_value = first_value
            self.second_pin_value = second_value



if __name__ == '__main__':
    wiringpi.wiringPiSetup()
    encoderProcessor = EncoderProcessor()
    encoderProcessor.start_processing()
