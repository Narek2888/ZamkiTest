from python_tests.Pages.homepage import HomePage
from python_tests import config
import pytest
from selenium.webdriver.common.by import By



basepage = HomePage(config.driver)


# adding the decorator
# @allure.severity(allure.severity_level.NORMAL)
# @pytest.mark.usefixtures("driver_init")
def test_open_mainpage():

    basepage.main_page()
    assert config.url_to_be("http://localhost:3000/")


def test_about_button():

    basepage.main_page()
    basepage.about_button().click()
    assert config.url_to_be("http://localhost:3000/about")


def test_contacts_button():

    basepage.main_page()
    basepage.contacts_button().click()
    assert config.url_to_be("http://localhost:3000/contacts")


def test_novelty_button():

    basepage.main_page()
    basepage.novelty_button().click()
    assert config.url_to_be("http://localhost:3000/new")


def test_partners_button():

    basepage.main_page()
    basepage.partners_button().click()
    assert config.url_to_be("http://localhost:3000/partners")


def test_delivery_button():

    basepage.main_page()
    basepage.delivery_button().click()
    assert config.url_to_be("http://localhost:3000/delivery")


def test_keys_production_button():

    basepage.main_page()
    basepage.keys_production_button().click()
    assert config.url_to_be("http://localhost:3000/key-manufacture")


def test_basket_button():

    basepage.main_page()
    basepage.basket().click()
    assert config.url_to_be("http://localhost:3000/karzina")

def test_about_text():

    basepage.main_page()
    basepage.about_button().click()
    text = config.presence_of_element_located(By.XPATH, '//*[@id="root"]/div/div[2]/div[1]/div[2]').get_attribute('innerHTML')

    import requests

    url = "https://zamki-strapi.codium.pro/api/about"

    data = requests.get(url).json()

    assert data['data']['attributes']['about_html'] == text