#!python3

import os

PORT = os.environ['RCON_PORT']
PASSWORD = os.environ['RCON_PASSWORD']

print("checking environment variables")
if not PORT or not PASSWORD:
    raise Exception("RCON_PORT and RCON_PASSWORD must be set")

with open("server.properties", "r") as f:
    lines = f.readlines()
with open("server.properties", "w") as f:
    print("stripping existing rcon config")
    for line in lines:
        if 'rcon' not in line:
            f.write(line)
    print("applying new rcon config")
    f.writelines([
        'enable-rcon=true',
        f'\nrcon.port={PORT}',
        f'\nrcon.password={PASSWORD}'
    ])