#include <iostream>
#include <cstdlib>
#include <ctime>
#include <conio.h>
#include <windows.h>

using namespace std;

const int HEIGHT = 20;
const int WIDTH = 40;
const int GAP_SIZE = 5;
const int OBSTACLE_WIDTH = 4;
const int GRAVITY = 1;
const int JUMP_POWER = -4;

struct Bird {
    int x, y, yVelocity;
};

struct Obstacle {
    int x, gapPosition;
};

void setCursorPosition(int x, int y) {
    static const HANDLE hOut = GetStdHandle(STD_OUTPUT_HANDLE);
    cout.flush();
    COORD coord = { (SHORT)x, (SHORT)y };
    SetConsoleCursorPosition(hOut, coord);
}

void drawBird(Bird bird) {
    setCursorPosition(bird.x, bird.y);
    cout << "v";
}

void drawObstacle(Obstacle obstacle) {
    for (int y = 0; y < obstacle.gapPosition; y++) {
        setCursorPosition(obstacle.x, y);
        cout << "|";
    }
    for (int y = obstacle.gapPosition + GAP_SIZE; y < HEIGHT; y++) {
        setCursorPosition(obstacle.x, y);
        cout << "|";
    }
}

bool isColliding(Bird bird, Obstacle obstacle) {
    if (bird.x >= obstacle.x && bird.x <= obstacle.x + OBSTACLE_WIDTH) {
        if (bird.y <= obstacle.gapPosition || bird.y >= obstacle.gapPosition + GAP_SIZE) {
            return true;
        }
    }
    return false;
}

int main() {
    srand(time(NULL));

    Bird bird = { WIDTH / 4, HEIGHT / 2, 0 };

    Obstacle obstacles[3];
    for (int i = 0; i < 3; i++) {
        obstacles[i].x = WIDTH + i * (WIDTH / 3);
        obstacles[i].gapPosition = rand() % (HEIGHT - GAP_SIZE - 2) + 1;
    }

    while (true) {
        if (_kbhit()) {
            char key = _getch();
            if (key == ' ') {
                bird.yVelocity = JUMP_POWER;
            }
        }

        bird.yVelocity += GRAVITY;
        bird.y += bird.yVelocity;

        if (bird.y < 0 || bird.y >= HEIGHT) {
            cout << "Game over!" << endl;
            return 0;
        }

        for (int i = 0; i < 3; i++) {
            obstacles[i].x--;

            if (obstacles[i].x < -OBSTACLE_WIDTH) {
                obstacles[i].x = WIDTH;
                obstacles[i].gapPosition = rand() % (HEIGHT - GAP_SIZE - 2) + 1;
            }

            if (isColliding(bird, obstacles[i])) {
                cout << "Game over!" << endl;
                return 0;
            }

            drawObstacle(obstacles[i]);
        }

        drawBird(bird);

        Sleep(100);
        system("cls");
    }

    return 0;
}
