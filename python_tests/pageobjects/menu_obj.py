from seleniumbase import BaseCase
from python_tests.pageobjects.page_elements import HomeElements

class Homepage(BaseCase):
    
    def menu_icon(self):
        self.click(HomeElements.menu_icon_xpath)