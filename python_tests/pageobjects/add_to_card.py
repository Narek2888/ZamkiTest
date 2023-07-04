from seleniumbase import BaseCase
from python_tests.pageobjects.page_elements import HomeElements

class AddToCard(BaseCase):
    
    def addition_to_card(self):

        # self.click(HomeElements.vreznie_xpath)
        self.open('https://zamki.codium.pro/subcategories/1/1')

        # click on add to card
        self.click('//*[@id="root"]/div/div[2]/div/div[2]/div[4]/div[3]/div[1]/div[2]/div[2]/div[2]/div[1]')
        
        # click go to card
        self.click('//*[@id="root"]/div/div[2]/div/div[2]/div[4]/div[3]/div[1]/div[3]/div/a')