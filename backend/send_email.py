from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import base64
import pickle
import googleapiclient
from google.auth.transport.requests import Request
from googleapiclient.discovery import build


def get_credentials():
    objects = []
    with (open("token.pickle", "rb")) as openfile:
        try:
            objects.append(pickle.load(openfile))
            creds = objects[0]
            if not creds or not creds.valid:
                if creds and creds.expired and creds.refresh_token:
                    creds.refresh(Request())
            return creds
        except Exception as e:
            print(e)


def create_message(recipient,body,name):
    message = MIMEText(body)
    message['to'] = recipient
    message['from'] = "info@moderngodaam.com"
    message['subject'] = "Query from {}".format(name)
    return {'raw': base64.urlsafe_b64encode(message.as_string().encode()).decode()}


def send_email(recipient,body,name):
    creds = get_credentials()
    message = create_message(recipient,body,name)
    service = build('gmail', 'v1', credentials=creds, cache_discovery=False)
    message = (service.users().messages().send(userId="me", body=message)
               .execute())
    print('Message Id: %s' % message['id'])
    return True