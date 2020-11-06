from setuptools import setup

setup(
    name='lns',
    description='ln -s is an open-source symlinker that insists on simplicity.',
    version='2.0.dev0',
    install_requires=[
        'Django>=3.1',
        'psycopg2-binary',
        'djangorestframework>=3.12'
    ],
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: GNU General Public License v2 (GPLv2)',
        'Operating System :: Unix',
        'Programming Language :: Python :: 3.8',
    ],
)
