function a() {
    debugger;
    b();
    print('A line in a');
}

function b() {
    print('A line in b');
}

a();
