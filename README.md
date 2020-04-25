# visualAI
A GUI based end-to-end deep learning model builder



# How to run this project
```shell
chmod +x ./run.sh
```
```shell
./run.sh
```

## Create backend branch before you begin working :heavy_check_mark: 

## JSON for model

```json
{
    "layers": [
        {
            "neurons": 20,
            "visual": {
                "position": [
                    200,
                    315
                ],
                "color": "red"
            },
            "dropout": false,
            "filter": 5,
            "kernal": 1,
            "input_size": 6,
            "output_size": 12
        },
        {
            "neurons": 10,
            "visual": {
                "position": [
                    300,
                    415
                ],
                "color": "red"
            },
            "dropout": true,
            "filter": 5,
            "kernal": 1,
            "input_size": 12,
            "output_size": 6
        },
        {
            "neurons": 10,
            "visual": {
                "position": [
                    300,
                    415
                ],
                "color": "red"
            },
            "dropout": true,
            "filter": 5,
            "kernal": 1,
            "input_size": 12,
            "output_size": 6
        }
    ]
}
```
