import json
from response import success,failure

from send_email import send_email

def email(event,context):
    try:
        body=json.loads(event['body'])
        text=""
        for i in body.keys():
            text+=i+": "+body[i]+"\n"
        print(text)
        send_email(recipient="info@moderngodaam.com",body=text,name=body['fullName'])
        return success({"message":"E-mail has been sent"})
    except Exception as e:
        print("Error here :",e)
        return failure(repr(e))