<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class MakeView extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:view {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates a view file';

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

        $name = str_replace('.', '/', $name);

        $filename = resource_path('views/' . $name . '.blade.php');

        if (file_exists($filename)) {
            $this->error('View file already exists. Aborting.');
            return 1;
        }

        if (!file_exists(dirname($filename))) {
            mkdir(dirname($filename), 0777, true);
        }

        $php = [];
        $php[] = '@extends(\'layouts.main\')';
        $php[] = '';
        $php[] = '@section(\'content\')';
        $php[] = '';
        $php[] = '';
        $php[] = '';
        $php[] = '@endsection';

        file_put_contents($filename, join(PHP_EOL, $php));

        $this->info('View file created');

        return 0;
    }
}
