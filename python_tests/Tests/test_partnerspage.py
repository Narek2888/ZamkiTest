from python_tests.pageobjects.partners_page_obj import Partnerspage
from python_tests.pageobjects.page_elements import HomeElements
from python_tests.pageobjects.homepage_obj import Homepage
import requests


class PartnersPage(Partnerspage):


    # setUp function is running before each test
    def setUp(self):
        super().setUp()
        Homepage.homepage(self)
        self.maximize_window()

        Homepage.partnersbutton(self)

    def test_partners_logo(self):

        # tekaing data and filtering image url for each partner
        partners_data = requests.get("https://zamki-strapi.codium.pro/api/brands?populate=deep").json()
        
        info_list = []

        for j in range(len(partners_data['data'])):
            info = partners_data["data"][j]['attributes']["logo"]["data"][0]["attributes"]["url"]
            info_list.append(info)
        
        #filtering image url for each partner from html
        dom_url_list = []
        
        for i in range(1, len(partners_data['data'])+1):
            partners_list = self.get_image_url(f'//*[@id="root"]/div/div[2]/div/div[3]/a[{i}]/img')
            dom_url_list.append(partners_list)

        print("/n dom url list", dom_url_list)
        # checking the equality of urls
        for x in range(len(info_list)):
            self.assert_equal(f"https://zamki-strapi.codium.pro/{info_list[x]}", dom_url_list[x])