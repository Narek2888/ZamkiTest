from seleniumbase import BaseCase
from python_tests.pageobjects.page_elements import HomeElements

class Basketpage(BaseCase):

    def homepage(self):
        self.open(HomeElements.basket_url)
        self.maximize_window()