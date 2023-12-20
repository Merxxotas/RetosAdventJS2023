<?php

class Decode {
    public static function decode($message) {
        $stack = new SplStack();

        foreach (str_split($message) as $c) {
            if ($c == ')') {
                $reversed = '';
                while (!$stack->isEmpty() && $stack->top() != '(') {
                    $reversed .= $stack->pop();
                }
                // Remove the '(' from stack
                $stack->pop();
                // Push the reversed string back into stack
                foreach (str_split($reversed) as $reversedChar) {
                    $stack->push($reversedChar);
                }
            } else {
                $stack->push($c);
            }
        }

        $result = '';
        while (!$stack->isEmpty()) {
            $result .= $stack->pop();
        }

        return strrev($result);
    }
}

$a = Decode::decode("hola (odnum)");
echo $a . PHP_EOL; // Hola mundo

$b = Decode::decode("(olleh) (dlrow)!");
echo $b . PHP_EOL; // Hello World!

$c = Decode::decode("sa(u(cla)atn)s");
echo $c . PHP_EOL; // santaclaus

$d = Decode::decode("((nta)(sa))");
echo $d . PHP_EOL; // Hello World!

?>
