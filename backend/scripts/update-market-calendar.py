import requests
import json
from datetime import datetime

markets = ['XIDX', 'XKLS', 'XTKS', 'XASX', 'XNYS', 'XSES']


def main():

    start = str(datetime.today().strftime('%Y-%m-%d'))
    split = start.split('-')
    end = str(int(split[0])+1) + "-" + split[1]+ "-" + split[2]

    for market in markets: 
        res = requests.get(f'http://127.0.0.1:8000/api/v1/markets?mic={market}')
        std  = json.loads(res.text)
        res = requests.get(f'http://127.0.0.1:8000/api/v1/markets/holidays?mic={market}&start={start}&end={end}')
        holidays = json.loads(res.text)

        f = open(f"./assets/market_calendar/{market}.json", "w")
        format = {
            'std': std[0],
            'holidays': holidays,
        }
        
        f.write(json.dumps(format, indent=4))
        f.close()
    print(f'Market Calendar updated with data from {start} to {end}')


main()