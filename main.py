import Adafruit_DHT
import json
import time
import mysql.connector
mydb = mysql.connector.connect(
  host="localhost",
  user="dbrs",
  password="bismillah",
  database="rscounter"
)
DHT_SENSOR = Adafruit_DHT.DHT22
DHT_PIN = 4  # GPIO 4
ts = time.time()

humidity, temperature = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)


while True :
    time.sleep(1)
    try:
        humidity, temperature = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)
        if humidity is not None and temperature is not None:
            data = json.dumps({
                'temperature': round(temperature, 2), 
                'humidity': round(humidity, 2)
            })
            print(data)
            # f = open("dht22.json", "w")
            # f.write(str(data))
            # f.close()
            mycursor = mydb.cursor()
            sql = "UPDATE status_room SET temp = '%s', humid = '%s' WHERE id = 1"
            val = (round(temperature, 2), round(humidity, 2))
            mycursor.execute(sql, val)
            mydb.commit()
        else:
            print("Failed to retrieve data from humidity sensor")
    except:
        print("err")
