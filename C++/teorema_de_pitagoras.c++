#include <iostream>
#include <cmath>

int main() {
    double c1;
    double c2;
    double h;

    char ch;

    std::cout << '\n';
    std::cout << "##### Teorema de pitagoras ##### \n";
    std::cout << "ingresa C en caso de que quieras hallar un cateto o H en caso de la hipotenusa: ";
    std::cin >> ch;
    std::cout << '\n';
    

    switch (ch)
    {
  
    case 'H':
        std::cout << "ingresa el valor del primer cateto:  \n";
        std::cin >> c1;
        std::cout << '\n';

        std::cout << "ahora ingresa el valor del segundo cateto:  \n";
        std::cin >> c2;
        std::cout << '\n';

        c1 = pow(c1, 2);
        c2 = pow(c2, 2);
        h = sqrt(c1 + c2);

        std::cout << "la hipotenusa es: " << h;
        std::cout << '\n';
        break;

    case 'h':
        std::cout << "ingresa el valor del primer cateto:  \n";
        std::cin >> c1;
        std::cout << '\n';

        std::cout << "ahora ingresa el valor del segundo cateto:  \n";
        std::cin >> c2;
        std::cout << '\n';

        c1 = pow(c1, 2);
        c2 = pow(c2, 2);
        h = sqrt(c1 + c2);

        std::cout << "la hipotenusa es: " << h;
        std::cout << '\n';
        break;

    case 'C':
        std::cout << "ingrese el valor de la hipotenusa: ";
        std::cin >> h;
        std::cout << '\n';

        std::cout << "ingrese el valor del cateto: ";
        std::cin >> c1;
        std::cout << '\n';

        h = pow(h, 2);
        c1 = pow(c1, 2);
        c2 = sqrt(h - c1);

        std::cout << "el valor del cateto es: " << c2;
        std::cout << '\n';
        break;

    case 'c':
        std::cout << "ingrese el valor de la hipotenusa: ";
        std::cin >> h;
        std::cout << '\n';

        std::cout << "ingrese el valor del cateto: ";
        std::cin >> c1;
        std::cout << '\n';

        h = pow(h, 2);
        c1 = pow(c1, 2);
        c2 = sqrt(h - c1);

        std::cout << "el valor del cateto es: " << c2;
        std::cout << '\n';
        break;

    default:
    std::cout << "algo salio mal, intenta de nuevo";
        break;
    }

    return 0;
}