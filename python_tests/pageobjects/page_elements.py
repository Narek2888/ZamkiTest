class HomeElements():

    # links
    home_url = "http://localhost:3000/"
    about_url = f"{home_url}about"
    contacts_url = f"{home_url}contacts"
    new_url = f"{home_url}new"
    partners_url = f"{home_url}partners"
    delivery_url = f"{home_url}delivery"
    key_manufacture_url = f"{home_url}key-manufacture"
    
    
    # homepage elements xpaths
    about_xpath = '//*[@id="root"]/div/div[1]/div[2]/a[1]'
    contacts_xpath = '//*[@id="root"]/div/div[1]/div[2]/a[2]'
    new_xpath = '//*[@id="root"]/div/div[1]/div[2]/a[3]'
    partners_xpath = '//*[@id="root"]/div/div[1]/div[2]/a[4]'
    delivery_xpath = '//*[@id="root"]/div/div[1]/div[2]/a[5]'
    key_manufacture_xpath = '//*[@id="root"]/div/div[1]/div[2]/a[6]'
    logo_xpath = '//*[@id="root"]/div/div[1]/div[1]/div[1]/div[2]/a/img'
    searchfield_xpath = '//*[@id="root"]/div/div[1]/div[1]/div[2]/div[1]/input'
    basket_xpath = '//*[@id="root"]/div/div[1]/div[1]/div[2]/div[2]/a/img'
    menu_icon_xpath = '//*[@id="root"]/div/div[1]/div[1]/div[1]/div[1]/img'
    
    # about_page elements
    about_text_xpath = '//*[@id="root"]/div/div[2]/div[1]/div[2]/div[2]'

    # contacts_page elements
    contacts_text_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div[2]'

    # delivery_page elements
    delivery_text_xpath = '//*[@id="root"]/div/div[2]/div[1]/div[2]/div[2]'

    # key_manufacture elements
    key_manufacture_text_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div[2]'

    menu_links = ['about', 'contacts', 'new', 'partners', 'delivery', 'key_manufacture']