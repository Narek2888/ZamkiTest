from python_tests.pageobjects.homepage_obj import Homepage
from python_tests.pageobjects.page_elements import HomeElements
import requests
import time


class TestKeyManufacturePage(Homepage):

    # setUp function is running before each test
    def setUp(self):
        super().setUp()
        self.open(HomeElements.key_manufacture_url)
        self.maximize_window()

    def test_key_manufacture_text(self):

        # takeing the text with HTML code
        text = self.get_attribute(HomeElements.key_manufacture_text_xpath, "innerHTML", timeout=15)
        
        # getting data from the request
        data = requests.get("https://zamki-strapi.codium.pro/api/lock-production").json()
        
        # getting text from data (HTML code)
        data_text = data['data']['attributes']['production_information']

        # checking the equality of both text
        self.assert_equal(text, data_text)