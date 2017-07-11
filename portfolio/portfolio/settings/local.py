# settings/local.py
# Overwrite all the namepsaces
from .base import *

ALLOWED_HOSTS += ['10.1.1.2']

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True