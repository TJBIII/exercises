describe('Specification for work checker', function() {
  it('should have a checkWordCount function', function() {
    expect(checkWordCount).toBeDefined();
  });

  it('should return false if a string has more than 100 words', function() {
    expect(checkWordCount("Drinking vinegar occupy 8-bit, brunch pork belly letterpress microdosing venmo plaid. Drinking vinegar typewriter pork belly, chartreuse jean shorts yr vice banjo locavore distillery semiotics master cleanse +1 bitters. Kale chips VHS shabby chic meggings disrupt. Sriracha wayfarers jean shorts ennui, disrupt cred vice PBR&B. Normcore cliche hella master cleanse, chia post-ironic ennui forage vegan. Everyday carry tousled gluten-free meditation vegan. Everyday carry normcore tilde photo booth humblebrag locavore, scenester pop-up whatever post-ironic. Drinking vinegar occupy 8-bit, brunch pork belly letterpress microdosing venmo plaid. Drinking vinegar typewriter pork belly, chartreuse jean shorts yr vice banjo locavore distillery semiotics master cleanse +1 bitters. Kale chips VHS shabby chic meggings disrupt. Sriracha wayfarers jean shorts ennui, disrupt cred vice PBR&B. Normcore cliche hella master cleanse, chia post-ironic ennui forage vegan. Everyday carry tousled gluten-free meditation vegan. Everyday carry normcore tilde photo booth humblebrag locavore, scenester pop-up whatever post-ironic.")).toBe(false);
    });

  it('should have a duplicateCheck function', function() {
    expect(duplicateCheck).toBeDefined();
  });


  it('should return false if a string has duplicate words', function() {
    expect(duplicateCheck("one man, one legend")).toBe(false);
    expect(duplicateCheck("this has no duplicates")).toBe(true);
  });

  it('should have a verifyAlphaNumeric function', function() {
    expect(verifyAlphaNumeric).toBeDefined();
  });

  it('should return false if there are any non-alphanumeric characters', function() {
    expect(verifyAlphaNumeric('$34jklfdalkh#82918@*')).toBe(false);
    expect(verifyAlphaNumeric('jfkdla fheahf fjdkleifa')).toBe(true);
  });

});