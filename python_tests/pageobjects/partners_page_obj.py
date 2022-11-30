from seleniumbase import BaseCase
from python_tests.pageobjects.page_elements import HomeElements

class Partnerspage(BaseCase):

    def partnerspage(self):
        self.open(HomeElements.partners_url)
        self.maximize_window()

    