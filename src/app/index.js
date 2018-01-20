// import main scss file and reset 
import 'normalize.css';
import '../styles/main.scss';

// EXAMPLES:

    // import the components:
    // make note that you need to use relative paths here, 'scripts' is in the sam directory as this file, so path starts with './'
    import testLogger from './scripts/examples/testLog';
    import testLogger2 from './scripts/examples/testLog2';

    console.log('::::::::::: use properties :::::::::::');
    console.log(testLogger.property);

    console.log('::::::::::: call methods :::::::::::');
    testLogger.log();
    testLogger.log2();
    testLogger2.log();
    testLogger2.log2();

    console.log('::::::::::: assign methods to variables and use them where you need them :::::::::::');
    let logger2Log2 = testLogger2.log2;
    logger2Log2();

    console.log('::::::::::: use the method from the other component :::::::::::');
    testLogger2.logFromTestLog();

// END EXAMPLES