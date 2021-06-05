#!/usr/bin/env python
from setuptools import setup

setup(
    name="dealicious",
    version="1.0",
    packages=["dealicious"],
    install_requires=[
        "black",
        "django",
        "djangorestframework",
        "graphene-django",
        "pylint-django",
        "python-dotenv",
        "psycopg2",
        "wheel",
    ],
    scripts=["manage.py"],
)
