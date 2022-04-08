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

setup helper
```
sudo apt update
sudo apt install apache2 php mariadb-server npm
sudo apt install php7.3-mysql
sudo mysql_secure_installation

sudo chmod -R 777 /var/www/html/
cd /var/www/html/
wget https://files.phpmyadmin.net/phpMyAdmin/5.1.3/phpMyAdmin-5.1.3-all-languages.zip
unzip phpMyAdmin-5.1.3-all-languages.zip
rm phpMyAdmin-5.1.3-all-languages.zip

git clone https://github.com/brili99/jam-operasi.git
cd jam-operasi
npm install
pip3 install Adafruit_DHT
pip3 install mysql-connector


sudo mysql -u root
CREATE DATABASE rscounter;
CREATE USER 'dbrs'@'localhost' IDENTIFIED BY 'bismillah';
GRANT ALL PRIVILEGES ON *.* TO 'dbrs'@'localhost';
sudo mysql -u root -p rscounter < rscounter.sql


sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
@chromium --kiosk http://localhost/jam-operasi/
@lxterminal -e python3 /var/www/html/jam-operasi/main.py
```
