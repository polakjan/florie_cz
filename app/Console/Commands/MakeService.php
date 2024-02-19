<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class MakeService extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:service {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates a service class file';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $name = $this->argument('name');

        $filename = app_path('Services/' . $name . '.php');

        if (file_exists($filename)) {
            $this->error('Service file already exists. Aborting.');
            return 1;
        }

        if (!file_exists(dirname($filename))) {
            mkdir(dirname($filename), 0777, true);
        }

        $php = [];
        $php[] = '<?php';
        $php[] = '';
        $php[] = 'namespace App\Services;';
        $php[] = '';
        $php[] = 'class ' . $name;
        $php[] = '{';
        $php[] = '    //';
        $php[] = '}';

        file_put_contents($filename, join(PHP_EOL, $php));

        $this->info('Service file created');

        return 0;
    }
}
