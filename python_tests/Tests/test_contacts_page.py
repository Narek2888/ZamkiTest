from python_tests.pageobjects.homepage_obj import Homepage
from python_tests.pageobjects.page_elements import HomeElements
import requests


class TestContactsPage(Homepage):

    # setUp function is running before each test
    def setUp(self):
        super().setUp()
        self.open(HomeElements.contacts_url)
        self.maximize_window()


    def test_contacts_text(self):

        # takeing the text with HTML code
        text = self.get_attribute(HomeElements.contacts_text_xpath, "innerHTML")

        # getting data from the request
        data = requests.get("https://zamki-strapi.codium.pro/api/contact").json()
        
        # getting text from data (HTML code)
        data_text = data['data']['attributes']['contact_html']

        # checking the equality of both text
        self.assert_equal(text, data_text)