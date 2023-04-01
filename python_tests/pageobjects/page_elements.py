class HomeElements():

    # links
    home_url = "https://zamki.codium.pro/"
    about_url = f"{home_url}about"
    contacts_url = f"{home_url}contacts"
    new_url = f"{home_url}new"
    partners_url = f"{home_url}partners"
    delivery_url = f"{home_url}delivery"
    key_manufacture_url = f"{home_url}key-manufacture"
    basket_url = f"{home_url}basket"
    
    
    # homepage elements xpaths
    about_xpath = '//*[@id="root"]/div/div[1]/div[2]/a[1]'
    contacts_xpath = '//*[@id="root"]/div/div[1]/div[2]/a[2]'
    new_xpath = '//*[@id="root"]/div/div[1]/div[2]/a[3]'
    partners_xpath = '//*[@id="root"]/div/div[1]/div[2]/a[4]'
    delivery_xpath = '//*[@id="root"]/div/div[1]/div[2]/a[5]'
    key_manufacture_xpath = '//*[@id="root"]/div/div[1]/div[2]/a[6]'
    logo_xpath = '//*[@id="root"]/div/div[1]/div[1]/div[1]/div[2]/a/img'
    searchfield_xpath = '//*[@id="root"]/div/div[1]/div[1]/div[2]/div[2]/input'
    basket_xpath = '//*[@id="root"]/div/div[1]/div[1]/div[2]/div[3]'
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

    # category list elements
    zamki_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div'
    ruchki_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[3]/div'
    petli_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[4]/div'
    zasholki_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[5]/div'
    fiksatori_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[6]/div'
    cilind_mex_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[7]/div'
    perekod_klyuch_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[8]/div'
    mebelnie_ruchki_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[9]/div'
    mebelnaya_furnit_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[10]/div'
    dvernaya_furnit_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[11]/div'
    dvernie_dovodchiki_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[12]/div'
    razdvizh_mexanizmi_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[13]/div'
    avtomat_porogi_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[14]/div'
    zasovi_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[15]/div'
    okon_furnit_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[16]/div'
    pocht_yashiki_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[17]/div'

    
    # subcategory list

    # category "Замки"
    vreznie_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div[2]/button[1]'

    # category "Ручки"
    na_razdelnom_osnovanii_xpath = '//*[@id="root"]/div/div[2]/div/div[1]/div[3]/div[2]/button[1]'