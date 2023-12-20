import java.util.Stack;

public class DecodingMessages {

    public static String decode(String message) {
        Stack<Character> stack = new Stack<>();

        for (char c : message.toCharArray()) {
            if (c == ')') {
                StringBuilder reversed = new StringBuilder();
                while (!stack.isEmpty() && stack.peek() != '(') {
                    reversed.append(stack.pop());
                }
                // Remove the '(' from stack
                stack.pop();
                // Push the reversed string back into stack
                for (char reversedChar : reversed.toString().toCharArray()) {
                    stack.push(reversedChar);
                }
            } else {
                stack.push(c);
            }
        }

        StringBuilder result = new StringBuilder();
        for (char c : stack) {
            result.append(c);
        }

        return result.toString();
    }

    public static void main(String[] args) {
        String a = decode("hola (odnum)");
        System.out.println(a); // Hola mundo

        String b = decode("(olleh) (dlrow)!");
        System.out.println(b); // Hello World!

        String c = decode("sa(u(cla)atn)s");
        System.out.println(c); // santaclaus
    }
}
