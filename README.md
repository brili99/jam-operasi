# jam-operasi
Project rumah sakit untuk countdown jam operasi

Khusus Raspberry pi, selebih itu perlu dilakukan tindak lanjut di file python bagian penggunaan sensor DHT22 (karena khusus raspi librarynya)

Setting autostart 
```sh
sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
```
lalu tambahkan line berikut
```
@chromium --kiosk http://localhost/
@lxterminal -e python3 /var/www/html/main.py
```
