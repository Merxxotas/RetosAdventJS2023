use strict;
use warnings;

sub decode {
    my ($message) = @_;

    my @stack;

    for my $char (split //, $message) {
        if ($char eq ')') {
            my $reversed = '';
            while (@stack && $stack[-1] ne '(') {
                $reversed .= pop @stack;
            }
            # Remove the '(' from stack
            pop @stack;
            # Push the reversed string back into stack
            push @stack, split //, $reversed;
        } else {
            push @stack, $char;
        }
    }

    return join('', @stack);
}

my $a = decode("hola (odnum)");
print "$a\n"; # Hola mundo

my $b = decode("(olleh) (dlrow)!");
print "$b\n"; # Hello World!

my $c = decode("sa(u(cla)atn)s");
print "$c\n"; # santaclaus

my $d = decode("((nta)(sa))");
print "$d\n"; # Hello World!
