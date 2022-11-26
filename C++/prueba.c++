#include <iostream>

int main() {
   int number;

   do{
      std::cout << "ingresa un numero positivo: ";
      std::cin >> number;
   }while(number < 0);

   std::cout << "el numero positivo es: " << number;
   return 0;
}