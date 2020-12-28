import json

def success(body):

   return {"statusCode": 200,
            'headers': {
      'Access-Control-Allow-Origin': '*'
        },
            "body": json.dumps(body)
            }

def failure(error,statuscode=500):
     return {"statusCode": statuscode,
            'headers': {
      'Access-Control-Allow-Origin': '*'
        },
            "body": json.dumps({"error":error})
            }