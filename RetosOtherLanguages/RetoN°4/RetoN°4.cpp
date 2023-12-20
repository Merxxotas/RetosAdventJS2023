#include <iostream>
#include <stack>

class Decode {
public:
    static std::string decode(const std::string& message) {
        std::stack<char> stack;

        for (char c : message) {
            if (c == ')') {
                std::string reversed;
                while (!stack.empty() && stack.top() != '(') {
                    reversed += stack.top();
                    stack.pop();
                }
                // Remove the '(' from stack
                stack.pop();
                // Push the reversed string back into stack
                for (char reversedChar : reversed) {
                    stack.push(reversedChar);
                }
            } else {
                stack.push(c);
            }
        }

        std::string result;
        while (!stack.empty()) {
            result = stack.top() + result;
            stack.pop();
        }

        return result;
    }
};

int main() {
    std::string a = Decode::decode("hola (odnum)");
    std::cout << a << std::endl; // Hola mundo

    std::string b = Decode::decode("(olleh) (dlrow)!");
    std::cout << b << std::endl; // Hello World!

    std::string c = Decode::decode("sa(u(cla)atn)s");
    std::cout << c << std::endl; // santaclaus

    std::string d = Decode::decode("((nta)(sa))");
    std::cout << d << std::endl; // Hello World!

    return 0;
}
