from python_tests.pageobjects.category_list import Categories
from python_tests.pageobjects.page_elements import HomeElements
from python_tests.pageobjects.homepage_obj import Homepage
import requests


class CategoryList(Categories):


    # setUp function is running before each test
    def setUp(self):
        super().setUp()
        Homepage.homepage(self)
        self.maximize_window()

    def test_vreznie(self):

        Categories.zamki(self)

        text_vreznie = self.get_text('//*[@id="root"]/div/div[2]/div/div[2]/div[4]/div[1]')

        self.assert_equal("ВРЕЗНЫЕ", text_vreznie)