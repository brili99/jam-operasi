# jam-operasi
Project rumah sakit untuk countdown jam operasi

Khusus Raspberry pi, selebih itu perlu dilakukan tindak lanjut di file python bagian penggunaan sensor DHT22 (karena khusus raspi librarynya)

Resolusi yang digunakan pada monitor 1360x768, jika ingin lebih dari itu edit css pada .circle agar lebih besar atau kecil. (Belum dapet agar responsif)

Setting autostart 
```sh
sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
```
lalu tambahkan line berikut
```
@chromium --kiosk http://localhost/jam-operasi/
@lxterminal -e python3 /var/www/html/jam-operasi/main.py
```
