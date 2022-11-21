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
        self.assert_equal(current_url, "http://localhost:3000/")
    
    def test_aboutbutton(self):

        #open homepage (setUp function is working)

        #click on the button "О Компании"
        Homepage.aboutbutton(self)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "http://localhost:3000/about")

    def test_contactsbutton(self):

        #open homepage (setUp function is working)

        #click on the button "Контакты"
        Homepage.contactsbutton(self)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "http://localhost:3000/contacts")
    
    def test_newbutton(self):

        #open homepage (setUp function is working)

        #click on the button "Новинки"
        Homepage.newbutton(self)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "http://localhost:3000/new")
    
    def test_partnersbutton(self):

        #open homepage (setUp function is working)

        #click on the button "Производители"
        Homepage.partnersbutton(self)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "http://localhost:3000/partners")
    
    def test_deliverybutton(self):

        #open homepage (setUp function is working)

        #click on the button "Доставка"
        Homepage.deliverybutton(self)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "http://localhost:3000/delivery")

    def test_key_manufacturebutton(self):

        #open homepage (setUp function is working)

        #click on the button "Изготовление ключей"
        Homepage.key_manufacturebutton(self)

        #get the home url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "http://localhost:3000/key-manufacture")

    def test_click_logo(self):

        #from homepage go to "О Компании" page
        Homepage.aboutbutton(self)

        #click on company logo
        Homepage.logo_button(self)

        #get current url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "http://localhost:3000/")

    def test_searchfield(self):

        text = "Защелка врезнаяe"

        self.send_keys(HomeElements.searchfield_xpath, text)
        
        try:
            self.assert_text_visible(text, '//*[@id="root"]/div/div[3]/div[1]/div[2]/div/div[2]')
        except TextNotVisibleException:
            self.assert_text_visible("По вышему запросу нечего не нашли:", '//*[@id="root"]/div/div[3]/div[1]/div[2]')

    
    def test_basket_button(self):

        #click on basket img
        Homepage.basket_button(self)

        #get current url
        current_url = self.get_current_url()

        #check the current url
        self.assert_equal(current_url, "http://localhost:3000/basket")

    