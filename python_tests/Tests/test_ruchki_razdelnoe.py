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

    def test_ruchki_razdelnoe(self):

        Categories.ruchki(self)

        text_na_razdelnom_osnovanii = self.get_text('//*[@id="root"]/div/div[2]/div/div[2]/div[4]/div[1]')

        self.assert_equal("НА РАЗДЕЛЬНОМ ОСНОВАНИИ", text_na_razdelnom_osnovanii)