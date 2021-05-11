import time
def test_google_search(py):
    py.visit('https://app.vodafone.ua/ac')
    # time.sleep(2)
    a = py.get('.product-icon')
    # a.click()
    print(a)
    # time.sleep(5)
    # b = py.getx('//*[@id="root"]/div/header/div[2]/div[2]/a')
    # print(b)
    # b.click()
    print(f"value of element is {a.get_attribute('style')}")

    assert py.should().contain_title('Vodafone Market')

