from python_tests.Pages.homepage import HomePage
from python_tests import config
import pytest
from selenium.webdriver.common.by import By
import requests


basepage = HomePage(config.driver)

def test_about_text():

    basepage.main_page()
    basepage.about_button().click()
    text = config.presence_of_element_located(By.XPATH, '//*[@id="root"]/div/div[2]/div[1]/div[2]').get_attribute('innerHTML')


    url_request = "https://zamki-strapi.codium.pro/api/about"

    data = requests.get(url_request).json()

    assert data['data']['attributes']['about_html'] == text