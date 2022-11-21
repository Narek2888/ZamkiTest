from python_tests.pageobjects.homepage_obj import Homepage
from python_tests.pageobjects.page_elements import HomeElements
import requests


class TestDeliveryPage(Homepage):

    # setUp function is running before each test
    def setUp(self):
        super().setUp()
        self.open(HomeElements.delivery_url)
        self.maximize_window()


    def test_delivery_text(self):

        # takeing the text with HTML code
        text = self.get_attribute(HomeElements.delivery_text_xpath, "innerHTML")

        # getting data from the request
        data = requests.get("https://zamki-strapi.codium.pro/api/delivery").json()
        
        # getting text from data (HTML code)
        data_text = data['data']['attributes']['delivery_html']

        # checking the equality of both text
        self.assert_equal(text, data_text)