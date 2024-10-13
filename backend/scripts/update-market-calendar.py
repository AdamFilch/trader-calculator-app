import requests
import json
from datetime import datetime

markets = [
    {
        'id': 'XIDX', 
        'scheduled_break': {
            'Monday': '12:30-14:30', 
            'Tuesday': '12:30-14:30', 
            'Wednesday': '12:30-14:30', 
            'Thursday': '12:30-14:30',
            'Friday': '11:30-13:30'}
     }, 
     {
         'id':'XKLS', 
         'scheduled_break': {
            'Monday': '12:30-14:30', 
            'Tuesday': '12:30-14:30', 
            'Wednesday': '12:30-14:30', 
            'Thursday': '12:30-14:30',
            'Friday': '12:30-14:30'}}, 
    {
        'id':'XTKS', 'scheduled_break': {
            'Monday': '11:30-12:30', 
            'Tuesday': '11:30-12:30', 
            'Wednesday': '11:30-12:30', 
            'Thursday': '11:30-12:30',
            'Friday': '11:30-12:30'}        
    }, 
    {
        'id':'XASX', 'scheduled_break': {}
    }, 
    {
        'id':'XNYS', 'scheduled_break': {}
    }, 
    {
        'id':'XSES', 'scheduled_break': {
            'Monday': '12:00-13:00', 
            'Tuesday': '12:00-13:00', 
            'Wednesday': '12:00-13:00', 
            'Thursday': '12:00-13:00',
            'Friday': '12:00-13:00'}
    } 
]

def main():

    temp = str(datetime.today().strftime('%Y-%m-%d'))
    split = temp.split('-')
    start = str(int(split[0])-1) + "-" + split[1]+ "-" + split[2]
    end = str(int(split[0])+1) + "-" + split[1]+ "-" + split[2]

    for market in markets: 
        try: 
            res = requests.get(f"http://127.0.0.1:8000/api/v1/markets?mic={market.get('id')}")
            std  = json.loads(res.text)
            res = requests.get(f"http://127.0.0.1:8000/api/v1/markets/holidays?mic={market.get('id')}&start={start}&end={end}")
            holidays = json.loads(res.text)

            scheduled_break = market.get('scheduled_break', {})
            stdMerged = {**std[0], 'scheduled_break': scheduled_break}

            f = open(f"./assets/market_calendar/{market.get('id')}.json", "w")
            format = {
                'std': stdMerged,
                'holidays': holidays,
            }

            
            f.write(json.dumps(format, indent=4))
            f.close()
        except Exception:
            print('Error encountered, Failed to establish connection check if docker is running!') 
    print(f'Market Calendar updated with data from {start} to {end}')


main()