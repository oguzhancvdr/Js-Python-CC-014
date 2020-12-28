# select a random sample without replacement
from random import sample, shuffle

# prepare a sequence
sequence = [i for i in range(50)]

# shuffle a squence above
shuffle(sequence)

# select a subset without replacement
subset = sample(sequence, 6)

# sort a subset
sorted_subset = sorted(subset)
print(sorted_subset)