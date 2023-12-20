sub manufacture {
  my ($gifts, $materials) = @_;
  my @result;
  
  foreach my $gift (@$gifts) {
    my $canMake = 1;
    
    foreach my $letter (split('', $gift)) {
      if (index($materials, $letter) == -1) {
        $canMake = 0;
        last;
      }
    }
    
    if ($canMake) {
      push @result, $gift;
    }
  }
  
  return \@result;
}

my $gifts = ['tren', 'oso', 'pelota'];
my $materials = 'tronesa';
my $result = manufacture($gifts, $materials);
print join(", ", @$result) . "\n";  # tren, oso

$gifts = ['juego', 'puzzle'];
$materials = 'jlepuz';
$result = manufacture($gifts, $materials);
print join(", ", @$result) . "\n";  # puzzle

$gifts = ['libro', 'ps5'];
$materials = 'psli';
$result = manufacture($gifts, $materials);
print join(", ", @$result) . "\n";  # 
