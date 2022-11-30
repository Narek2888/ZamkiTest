from seleniumbase import BaseCase
from python_tests.pageobjects.page_elements import HomeElements

class Homepage(BaseCase):

    def homepage(self):
        self.open(HomeElements.home_url)
        self.maximize_window()

    def aboutbutton(self):
        self.click(HomeElements.about_xpath)

    def contactsbutton(self):
        self.click(HomeElements.contacts_xpath)

    def newbutton(self):
        self.click(HomeElements.new_xpath)

    def partnersbutton(self):
        self.click(HomeElements.partners_xpath)

    def deliverybutton(self):
        self.click(HomeElements.delivery_xpath)

    def key_manufacturebutton(self):
        self.click(HomeElements.key_manufacture_xpath)

    def logo_button(self):
        self.click(HomeElements.logo_xpath)

    def basket_button(self):
        self.click(HomeElements.basket_xpath)