from selenium.webdriver.common.by import By
from python_tests import config

class HomePage:

    def __init__(self, driver):
        self.driver = driver


    """open home page"""
    def main_page(self):

        return self.driver.get("http://localhost:3000/")


    """о компании"""
    def about_button(self):
    
        return config.element_to_be_clickable(By.XPATH, '//*[@id="root"]/div/div[1]/div[2]/a[1]')

    
    """контакы"""
    def contacts_button(self):
    
        return config.element_to_be_clickable(By.XPATH, '//*[@id="root"]/div/div[1]/div[2]/a[2]')

    
    """новинки"""
    def novelty_button(self):
    
        return config.element_to_be_clickable(By.XPATH, '//*[@id="root"]/div/div[1]/div[2]/a[3]')
    

    """производители"""
    def partners_button(self):
    
        return config.element_to_be_clickable(By.XPATH, '//*[@id="root"]/div/div[1]/div[2]/a[4]')

    
    """доставка"""
    def delivery_button(self):
    
        return config.element_to_be_clickable(By.XPATH, '//*[@id="root"]/div/div[1]/div[2]/a[5]')


    """изготовление ключей"""
    def keys_production_button(self):
    
        return config.element_to_be_clickable(By.XPATH, '//*[@id="root"]/div/div[1]/div[2]/a[6]')


    """logo"""
    def logo(self):
    
        return config.element_to_be_clickable(By.XPATH, '//*[@id="root"]/div/div[1]/div[1]/div[1]/div[2]/a/img')


    """карзина"""
    def basket(self):
    
        return config.element_to_be_clickable(By.XPATH, '//*[@id="root"]/div/div[1]/div[1]/div[2]/div[2]/a/img')