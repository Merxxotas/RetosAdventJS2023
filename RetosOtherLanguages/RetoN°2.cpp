#include <iostream>
#include <vector>
#include <string>

std::vector<std::string> manufacture(std::vector<std::string> gifts, std::string materials) {
  std::vector<std::string> result;
  for (std::string gift : gifts) {
    bool canMake = true;
    for (char letter : gift) {
      if (materials.find(letter) == std::string::npos) {
        canMake = false;
        break;
      }
    }
    if (canMake) {
      result.push_back(gift);
    }
  }
  return result;
}

int main() {
  std::vector<std::string> gifts = {"tren", "oso", "pelota"};
  std::string materials = "tronesa";
  std::vector<std::string> result = manufacture(gifts, materials);
  for (std::string gift : result) {
    std::cout << gift << " ";
  }
  std::cout << std::endl;

  gifts = {"juego", "puzzle"};
  materials = "jlepuz";
  result = manufacture(gifts, materials);
  for (std::string gift : result) {
    std::cout << gift << " ";
  }
  std::cout << std::endl;

  gifts = {"libro", "ps5"};
  materials = "psli";
  result = manufacture(gifts, materials);
  for (std::string gift : result) {
    std::cout << gift << " ";
  }
  std::cout << std::endl;

  return 0;
}
