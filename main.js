$(document).ready(function() {

    // HOVER AND SCROLL EFFECTS
    // =========================================================================

    $("#brand1").hover(
        function() {
            $(this).append("<i class='fas fa-bars'></i>");
        },
        function() {
            $(this).find("i").remove();
        }
    );

    $("#central2").hover(
        function() {
            $(this).append("<i class='fas fa-bullseye'></i>");
        },
        function() {
            $(this).find("i").remove();
        }
    );

    $("#station3").hover(
        function() {
            $(this).append("<i class='fas fa-train'></i>");
        },
        function() {
            $(this).find("i").remove();
        }
    );

    $("#letsgo").click(function() {
        $('html,body').animate({
                scrollTop: $("#color-picker-scroll").offset().top
            },
            1000);
    });

    // STEP #1
    // =========================================================================
    generateColors();

    var winningID;
    var winningColor;
    var winningFont;
    var winningCategory;

    function generateColors() {
        for (var i = 0; i < 5; i++) {
            var column = $("<div class='two columns'></div>");
            for (var j = 0; j < 5; j++) {

                var option = $("<div></div>");
                option.attr("class", "option");
                option.attr("id", i * 5 + j);
                option.css("cursor", "pointer");

                var front = $("<div class='front'></div>");
                var back = $("<div class='back'></div>");

                var r = Math.random() * 255;
                var g = Math.random() * 255;
                var b = Math.random() * 255;
                front.css("background", "rgb(" + r + "," + g + "," + b + ")");
                back.css("background", "rgb(" + r + "," + g + "," + b + ")");
                option.append(front);
                option.append(back);
                column.append(option);

            }
            $("#colorOptions").append(column);

            if (i == 4) {
                var colorWidth = $(column).width();
                var colorOptionsWidth = $("#colorOptions").width()
                $(".option").each(function() {

                    $(this).eq(0).css("height", colorWidth);
                    $(this).eq(1).css("height", colorWidth);
                    $(this).css("margin-bottom", colorOptionsWidth * .015);
                });
            }
        }
    }

    $(".option").flip({
        trigger: 'manual'
    });

    $(".option").on("mouseenter", function() {
        $(this).flip('toggle');
    });

    $(".option").on("mouseleave", function() {
        $(this).flip('toggle');
    });

    $("#colorOptions").one("click", ".option", function() {
        winningColor = $(this).children().eq(0).css("background-color");
        winningID = this.id;
        var i = 0;
        var j = 0;

        $(".option").each(function() {
            $(this).children().eq(1).css("background", winningColor);
            $(this).css("cursor", "default");
            flipping(j, i)
            i = i + 60;
            j = j + 1;
        });

        $('html,body').animate({
                scrollTop: $("#font-picker-scroll").offset().top
            },
            2000);
    });

    function flipping(j, i) {
        setTimeout(function() {
            $("#" + j).flip('toggle');
        }, i);
    }


    // STEP #2
    // =========================================================================
    var sansFonts = [
        'Lato',
        'Montserrat',
        'Noto Sans',
        'PT Sans',
        'Poppins',
        'Roboto',
        'Tajawal',
        'Ubuntu'
    ];
    var serifFonts = [
        'Lora',
        'Crimson Text',
        'Libre Baskerville',
        'EB Garamond',
        'Vollkorn',
        'Alegreya',
        'Faustina',
        'Cardo'
    ];

    var lato = {
        font: "Lato",
        pair1: "Open Sans",
        pair2: "Roboto",
        pair3: "Oswald"
    };
    var montserrat = {
        font: "Montserrat",
        pair1: "Open Sans",
        pair2: "Roboto",
        pair3: "Raleway"
    };
    var notosans = {
        font: "Noto Sans",
        pair1: "Open Sans",
        pair2: "Noto Serif",
        pair3: "Inconsolata"
    };
    var ptsans = {
        font: "PT Sans",
        pair1: "Open Sans",
        pair2: "Roboto",
        pair3: "Lato"
    };
    var poppins = {
        font: "Poppins",
        pair1: "Roboto",
        pair2: "Open Sans",
        pair3: "Raleway"
    };
    var roboto = {
        font: "Roboto",
        pair1: "Open Sans",
        pair2: "Lato",
        pair3: "Raleway"
    };
    var tajawal = {
        font: "Tajawal",
        pair1: "Open Sans",
        pair2: "Roboto",
        pair3: "Montserrat"
    };
    var ubuntu = {
        font: "Ubuntu",
        pair1: "Open Sans",
        pair2: "Roboto",
        pair3: "Lato"
    };

    var Lora = {
        font: "Lora",
        pair1: "Playfair Display",
        pair2: "Open Sans",
        pair3: "Lato"
    };
    var crimsontext = {
        font: "Crimson Text",
        pair1: "Open Sans",
        pair2: "Lato",
        pair3: "Roboto"
    };
    var librebaskerville = {
        font: "Libre Baskerville",
        pair1: "Boogaloo",
        pair2: "Roboto",
        pair3: "Lato"
    };
    var ebgaramond = {
        font: "EB Garamond",
        pair1: "Lobster",
        pair2: "Roboto",
        pair3: "Jura"
    };
    var vollkorn = {
        font: "Vollkorn",
        pair1: "Open Sans",
        pair2: "Roboto",
        pair3: "Lato"
    };
    var alegreya = {
        font: "Alegreya",
        pair1: "Roboto",
        pair2: "Lato",
        pair3: "Lora"
    };
    var faustina = {
        font: "Faustina",
        pair1: "Open Sans",
        pair2: "Roboto",
        pair3: "Lato"
    };
    var cardo = {
        font: "Cardo",
        pair1: "Open Sans",
        pair2: "Lato",
        pair3: "Raleway"
    };

    var relations = [];
    relations.push(lato);
    relations.push(montserrat);
    relations.push(notosans);
    relations.push(ptsans);
    relations.push(poppins);
    relations.push(roboto);
    relations.push(tajawal);
    relations.push(ubuntu);
    relations.push(Lora);
    relations.push(crimsontext);
    relations.push(librebaskerville);
    relations.push(ebgaramond);
    relations.push(vollkorn);
    relations.push(alegreya);
    relations.push(faustina);
    relations.push(cardo);


    var sansColumn = $("<div class='six columns'></div>");
    var serifColumn = $("<div class='six columns'></div>");

    for (var i = 0; i < 8; i++) {

        var fontSection = $("<div class='font-op'></div>");
        var fontSection2 = $("<div class='font-op'></div>");

        var header = $("<h3></h3>");
        $(header).text("Donec quis libero ac");

        var paragraph = $("<p></p>");
        $(paragraph).text("Donec quis libero ac tellus sagittis dignissim vitae quis lacus. Sed sed mi et mauris iaculis condimentum. Nam eros mauris, dictum sit amet hendrerit ac, lobortis sed ex. Donec non elementum sapien. Nunc vel aliquam neque. Phasellus risus ante, porttitor nec sem eget.");

        var header2 = $("<h3></h3>");
        $(header2).text("Donec quis libero ac");

        var paragraph2 = $("<p></p>");
        $(paragraph2).text("Donec quis libero ac tellus sagittis dignissim vitae quis lacus. Sed sed mi et mauris iaculis condimentum. Nam eros mauris, dictum sit amet hendrerit ac, lobortis sed ex. Donec non elementum sapien. Nunc vel aliquam neque. Phasellus risus ante, porttitor nec sem eget.");


        $(fontSection).css("font-family", sansFonts[i]);
        $(fontSection).css("cursor", "pointer");
        $(header).css("font-family", sansFonts[i]);
        $(paragraph).css("font-family", sansFonts[i]);
        $(fontSection).append(header);
        $(fontSection).append(paragraph);
        $(sansColumn).append(fontSection);

        $(fontSection2).css("font-family", serifFonts[i]);
        $(fontSection2).css("cursor", "pointer");
        $(header2).css("font-family", serifFonts[i]);
        $(paragraph2).css("font-family", serifFonts[i]);
        $(fontSection2).append(header2);
        $(fontSection2).append(paragraph2);
        $(serifColumn).append(fontSection2);

    }

    $("#fontOptions").append(sansColumn);
    $("#fontOptions").append(serifColumn);

    $(".font-op").hover(
        function() {

            var cursorS = $(this).css("cursor");

            if (cursorS != "default") {
                $(this).css("padding-top", "7px")
                $(this).css("border-top", "4px solid black");
                $(this).css("border-bottom", "4px solid black");
            }


        },
        function() {

            var cursorS = $(this).css("cursor");


            if (cursorS != "default") {

                $(this).css("font-weight", "normal");
                $(this).css("border-top", "none");
                $(this).css("border-bottom", "none");

            }
        }
    );

    $("#fontOptions").one("click", ".font-op", function() {


        winningFont = $(this).css("font-family");
        $(".font-op").each(function() {
            $(this).css("cursor", "default");
            $(this).css("border-top", "none");
            $(this).css("border-bottom", "none");

        });

        $(this).css("color", winningColor);

        $('html,body').animate({
                scrollTop: $("#image-picker-scroll").offset().top
            },
            1500);


    });

    // STEP #3
    // =========================================================================

    $("#splasher").one('click', function() {
        winningCategory = $("#topic").val();
        results();

        $('html,body').animate({
                scrollTop: $("#results-scroll").offset().top
            },
            1500);

    });

    // RESULTS
    // =========================================================================


    function results() {
        $(".results").append("<h1 style='color:black'>YOUR</h1>");
        $(".results").append("<h1 style='color:black'>RESULTS</h1>");
        $(".results").append("<h1 style='color:black'>ARE IN</h1>");
        $(".results").append("<hr id='results-scroll'>");
        colorPalette();
        finalFonts();
        unsplashImages();
        brandbuilding();
    }


    function colorPalette() {
        var palette = $("<div id='colorPalette'></div>");
        var title = $("<h2>Customized color palette</h2>");
        var description = $("<p> Welcome to your new color palette! One of these colors should be your go to. (I find that the darker ones are better / way more readable, but that’s just me.) Let the rest be your back up colors. Use them for different things. (I included four different tones of the palette too!). This looks pretty, but all you’ll want to take away is those rgba values :).</p>");

        $(palette).append(title);
        $(palette).append(description);
        $(palette).append("<hr>");

        var rgbValues = winningColor.substring(4).split(", ");
        rgbValues[2] = rgbValues[2].substring(0, rgbValues[2].length - 1);
        for (var i = 0; i < 3; i++) {
            rgbValues[i] = parseInt(rgbValues[i]);
        }

        var values = randomC(rgbValues);

        var thePalette = $("<div class='row' id='finalPalette'></div>");
        for (var i = 0; i < 5; i++) {
            var column = $("<div class='two columns'></div>");
            var color1 = $("<div class='finalColor'></div>");
            var color2 = $("<div class='finalColor'></div>");
            var color3 = $("<div class='finalColor'></div>");
            var color4 = $("<div class='finalColor'></div>");

            color1.css('background-color', "rgba(" + values[i][0] + "," + values[i][1] + "," + values[i][2] + "," + 1 + ")");
            color2.css('background-color', "rgba(" + values[i][0] + "," + values[i][1] + "," + values[i][2] + "," + .8 + ")");
            color3.css('background-color', "rgba(" + values[i][0] + "," + values[i][1] + "," + values[i][2] + "," + .6 + ")");
            color4.css('background-color', "rgba(" + values[i][0] + "," + values[i][1] + "," + values[i][2] + "," + .4 + ")");

            var des1 = $('<div>' + "rgba(" + values[i][0] + ", " + values[i][1] + ", " + values[i][2] + ", " + 1 + ")" + '</div>');
            var des2 = $('<div>' + "rgba(" + values[i][0] + ", " + values[i][1] + ", " + values[i][2] + ", " + .8 + ")" + '</div>');
            var des3 = $('<div>' + "rgba(" + values[i][0] + ", " + values[i][1] + ", " + values[i][2] + ", " + .6 + ")" + '</div>');
            var des4 = $('<div>' + "rgba(" + values[i][0] + ", " + values[i][1] + ", " + values[i][2] + ", " + .4 + ")" + '</div>');

            column.append(des1).append(color1).append(des2).append(color2).append(des3).append(color3).append(des4).append(color4);
            thePalette.append(column);
        }

        palette.append(thePalette);

        $(".results").append(palette);

        var colorWidth = $(column).width();
        $(".finalColor").each(function() {
            $(this).css("height", colorWidth);
        });

    }

    function randomC(rgbValues) {

        var myPalette = [];
        myPalette.push(rgbValues);

        currentValues = rgbValues;

        for (var i = 0; i < 4; i++) {
            var tempValues = [];

            var plusOrMinus1 = Math.random() < 0.5 ? -1 : 1;
            var plusOrMinus2 = Math.random() < 0.5 ? -1 : 1;
            var plusOrMinus3 = Math.random() < 0.5 ? -1 : 1;

            tempValues[0] = currentValues[0] + Math.ceil(Math.random() * 80) * plusOrMinus1;
            tempValues[1] = currentValues[1] + Math.ceil(Math.random() * 80) * plusOrMinus2;
            tempValues[2] = currentValues[2] + Math.ceil(Math.random() * 80) * plusOrMinus3;
            myPalette.push(tempValues);
            currentValues = tempValues;

        }
        return myPalette;
    }


    function finalFonts() {

        var fontastic = $("<div id='imageResults'></div>");
        var title = $("<h2>Beautiful font kit</h2>");
        var description = $("<p> You can thank Google Fonts for this one. As a general rule of thumb, I think less is more when it comes to the number of fonts. I’d stick to two or three different fonts. Any more than that can get a little overkill. These combinations are recommended by Google through some means. I’m just going to trust them. You should too.</p>");

        $(fontastic).append("<hr>");
        $(fontastic).append(title);
        $(fontastic).append(description);
        $(fontastic).append("<hr>");

        var fonts = [];



        for (var i = 0; i < relations.length; i++) {

            var temp;
            if (winningFont.includes(" ")) {
                temp = "\"" + relations[i].font + "\"";
            } else {
                temp = relations[i].font;
            }

            console.log(temp);
            console.log(winningFont);

            if (temp == winningFont) {

                fonts.push(relations[i].pair1);
                fonts.push(relations[i].pair2);
                fonts.push(relations[i].pair3);
            }
        }

        var row = $("<div class='row'></div>");
        for (var i = 0; i < 3; i++) {
            var sample = $("<div class='four columns'></div>");
            var header = $("<h3></h3>");
            $(header).text(winningFont + " | #" + (i + 1));
            $(header).css("font-family", winningFont);

            var paragraph = $("<p></p>");
            $(paragraph).text("Donec quis libero ac tellus sagittis dignissim vitae quis lacus. Sed sed mi et mauris iaculis condimentum. Nam eros mauris, dictum sit amet hendrerit ac, lobortis sed ex. Donec non elementum sapien.");
            var fontName = $("<p></p>");
            $(fontName).text("Supporting font: " + fonts[i]);

            $(paragraph).css("font-family", fonts[i]);
            sample.append(header).append(paragraph).append(fontName);
            row.append(sample);
        }

        fontastic.append(row);

        $(".results").append(fontastic);
    }

    function unsplashImages() {

        var imageResults = $("<div id='imageResults'></div>");
        var title = $("<h2>Powerful brand images</h2>");
        var description = $("<p> These images can take your brand to the next level. (I think it’s proven that people interact better with images than text.) All of these images were randomly pulled from unsplash.com based on the industry you typed in. They might not be perfect, but it’s a start. Use them. Use them a lot.</p>");



        var row = $("<div class='row'></div>");
        var column1 = $("<div class='six columns'></div>");
        var column2 = $("<div class='six columns'></div>");

        for (var i = 0; i < 8; i++) {

            var brandImg = $("<img></img>");
            var imgLink = "https://source.unsplash.com/" + (1600 + i) + "x900/" + "?" + winningCategory;
            $(brandImg).attr("src", imgLink);

            if (i % 2 == 0) {
                $(column1).append(brandImg);
            } else {
                $(column2).append(brandImg);
            }

        }
        $(imageResults).append("<hr>");
        $(imageResults).append(title);
        $(imageResults).append(description);
        $(imageResults).append("<hr>");
        $(row).append(column1);
        $(row).append(column2);
        $(imageResults).append(row);
        $(".results").append(imageResults);

    }

    function brandbuilding() {
        var brandHelp = $("<div id='brandHelp'></div>");
        var title = $("<h2>Tools to build your brand</h2>");
        var description = $("<p> Keep in mind, this is the only the start. There’s a lot ahead of you to make a comprehensive brand. It’s definitely achievable, you just need to use the right tools. I’ve made a list below of some of the best platforms / services to bring a brand to life. Hope this helped!</p>");

        $(brandHelp).append("<hr>");
        $(brandHelp).append(title);
        $(brandHelp).append(description);
        $(brandHelp).append("<hr>");

        var list = $("<div></div>");
        var item1 = $("<p><b><a href='https://www.vistaprint.com/'>Vistaprint</a></b>: is a Dutch global, e-commerce brand that produces physical and digital marketing products for small and micro businesses. It was one of the first businesses to offer its customers the capabilities of desktop publishing through the internet when it first launched in 1999.</p>");
        var item2 = $("<p><b><a href='https://www.squarespace.com/'>Squarespace</a></b>: empowers millions of people — from individuals and local artists to entrepreneurs shaping the world’s most iconic businesses — to share their stories and create an impactful, stylish, and easy-to-manage online presence.</p>");
        var item3 = $("<p><b><a href='https://fonts.google.com/'>Google Fonts</a></b>: is a library of over 800 libre licensed fonts, an interactive web directory for browsing the library, and APIs for conveniently using the fonts via CSS and Android.</p>");
        var item4 = $("<p><b><a href='https://fontawesome.com/'>Font Awesome</a></b>: is a font and icon toolkit based on CSS and LESS. It was made by Dave Gandy for use with Twitter Bootstrap, and later was incorporated into the BootstrapCDN.</p>");
        var item5 = $("<p><b><a href='https://www.adobe.com/products/illustrator.html'>Adobe Illustrator</a></b>: is a vector graphics editor developed and marketed by Adobe Systems. The latest version, Illustrator CC 2018, is the 22nd generation in the product line.</p>");
        var item6 = $("<p><b><a href='https://www.sketchapp.com/'>Sketch</a></b>: is a proprietary vector graphics editor for Apple's macOS, developed by the Dutch company Bohemian Coding. It won an Apple Design Award in 2012. Sketch was first released on 7 September 2010.</p>");
        var item7 = $("<p><b><a href='https://thenounproject.com/'>Noun Project</a></b>: is a website that aggregates and catalogs symbols that are created and uploaded by graphic designers around the world.</p>");
        var item8 = $("<p><b><a href='https://unsplash.com/'>Unsplash</a></b>: is a website dedicated to sharing copyright-free photography under the Unsplash license. The website claims over 70,000 contributing photographers and generates more than 5 billion photo impressions per month on their growing library of over 509,000 photos.</p>");

        $(list).append(item1).append(item2).append(item3).append(item4).append(item5).append(item6).append(item7).append(item8);
        $(brandHelp).append(list);
        $(brandHelp).append("<hr>");



        $(".results").append(brandHelp);
    }









});
