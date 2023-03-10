from python_tests.pageobjects.homepage_obj import Homepage
from python_tests.pageobjects.page_elements import HomeElements
from seleniumbase.common.exceptions import *


class TestHomepage(Homepage):

    # setUp function is running before each test
    def setUp(self):
        super().setUp()
        Homepage.homepage(self)


    def test_home_url(self):

        #open homepage (setUp function is working)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "https://zamki.codium.pro/")
    
    def test_aboutbutton(self):

        #open homepage (setUp function is working)

        #click on the button "О Компании"
        Homepage.aboutbutton(self)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "https://zamki.codium.pro/about")

    def test_contactsbutton(self):

        #open homepage (setUp function is working)

        #click on the button "Контакты"
        Homepage.contactsbutton(self)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "https://zamki.codium.pro/contacts")
    
    def test_newbutton(self):

        #open homepage (setUp function is working)

        #click on the button "Новинки"
        Homepage.newbutton(self)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "https://zamki.codium.pro/new")
    
    def test_partnersbutton(self):

        #open homepage (setUp function is working)

        #click on the button "Производители"
        Homepage.partnersbutton(self)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "https://zamki.codium.pro/partners")
    
    def test_deliverybutton(self):

        #open homepage (setUp function is working)

        #click on the button "Доставка"
        Homepage.deliverybutton(self)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "https://zamki.codium.pro/delivery")

    def test_key_manufacturebutton(self):

        #open homepage (setUp function is working)

        #click on the button "Изготовление ключей"
        Homepage.key_manufacturebutton(self)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "https://zamki.codium.pro/key-manufacture")

    def test_click_logo(self):

        #from homepage go to "О Компании" page
        Homepage.aboutbutton(self)

        #click on company logo
        Homepage.logo_button(self)

        #get current url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "https://zamki.codium.pro/")

    def test_searchfield(self):

        text = "Защелка врезная"

        self.send_keys(HomeElements.searchfield_xpath, text)
        self.click('//*[@id="root"]/div/div[1]/div[1]/div[2]/div[2]/button')
        
        try:
            self.assert_text_visible(text, '//*[@id="root"]/div/div[2]/div[2]')
        except TextNotVisibleException:
            self.assert_text_visible("По вашему запросу ничего не нашли:", '//*[@id="root"]/div/div[3]/div[1]/div[2]')

    
    def test_basket_button(self):

        #click on basket img
        Homepage.basket_button(self)

        #get current url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "https://zamki.codium.pro/basket")

    