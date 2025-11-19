from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Users
        users = [
            User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel),
            User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel),
            User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc),
            User.objects.create(name='Batman', email='batman@dc.com', team=dc),
        ]

        # Workouts
        workouts = [
            Workout.objects.create(name='Cardio Blast', description='High intensity cardio'),
            Workout.objects.create(name='Strength Training', description='Build muscle'),
        ]

        # Activities
        Activity.objects.create(user=users[0], workout=workouts[0], duration=30)
        Activity.objects.create(user=users[1], workout=workouts[1], duration=45)
        Activity.objects.create(user=users[2], workout=workouts[0], duration=25)
        Activity.objects.create(user=users[3], workout=workouts[1], duration=50)

        # Leaderboard
        Leaderboard.objects.create(user=users[0], points=100)
        Leaderboard.objects.create(user=users[1], points=90)
        Leaderboard.objects.create(user=users[2], points=95)
        Leaderboard.objects.create(user=users[3], points=85)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with superhero test data.'))
