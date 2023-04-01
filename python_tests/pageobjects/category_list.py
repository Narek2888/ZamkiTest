from seleniumbase import BaseCase
from python_tests.pageobjects.page_elements import HomeElements

class Categories(BaseCase):
    
    def zamki(self):
        # self.click(HomeElements.zamki_xpath)

        self.click(HomeElements.vreznie_xpath)

    def ruchki(self):
        self.click(HomeElements.ruchki_xpath)

        self.click(HomeElements.na_razdelnom_osnovanii_xpath)