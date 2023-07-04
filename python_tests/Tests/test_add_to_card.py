from python_tests.pageobjects.add_to_card import AddToCard
from python_tests.pageobjects.homepage_obj import Homepage
from python_tests.pageobjects.page_elements import HomeElements
import requests


class TestAddToCard(AddToCard):

    # setUp function is running before each test
    def setUp(self):
        super().setUp()
        AddToCard.addition_to_card(self)
        # self.maximize_window()

    def test_add_to_card(self):

        self.click('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div[4]/a/div')

        # # takeing the text with HTML code
        # text = self.get_attribute(HomeElements.about_text_xpath, "innerHTML", timeout=10)

        # # getting data from the request
        # data = requests.get("https://zamki-strapi.codium.pro/api/about").json()
        
        # # getting text from data (HTML code)
        # data_text = data['data']['attributes']['about_html']

        # # checking the equality of both text
        # self.assert_equal(text, data_text)